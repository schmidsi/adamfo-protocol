import { BigInt, Bytes } from "@graphprotocol/graph-ts";
import { PoolCreated as PoolCreatedEvent } from "../generated/AdamfoProtocol/AdamfoProtocol";
import {
  RegisterExpense as RegisterExpenseEvent,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent
} from "../generated/templates/AdamfoPool/AdamfoPool";
import {
  RegisterExpense,
  TransferBatch,
  TransferSingle,
  URI,
  PoolCreated,
  Pool,
  Fren,
  PoolFren
} from "../generated/schema";

function getOrCreateFren(address: Bytes): Fren {
  let fren = Fren.load(address);
  if (fren == null) {
    fren = new Fren(address);
    fren.totalDeptCredit = BigInt.fromI32(0);
    fren.save();
  }
  return fren;
}

export function handlePoolCreated(event: PoolCreatedEvent): void {
  let entity = new PoolCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.childAddress = event.params.childAddress;
  entity.members = changetype<Bytes[]>(event.params.members);
  entity.save();

  let pool = new Pool(entity.childAddress);
  pool.totalDeptCredit = BigInt.fromI32(0);
  pool.members = changetype<Bytes[]>(event.params.members);
  pool.save();

  for (let i = 0; i < event.params.members.length; i++) {
    let fren = getOrCreateFren(event.params.members[i]);
    let poolFren = new PoolFren(pool.id.concat(event.params.members[i]));
    poolFren.pool = pool.id;
    poolFren.fren = fren.id;
    poolFren.deptCredit = BigInt.fromI32(0);
    poolFren.save();
  }
}

export function handleRegisterExpense(event: RegisterExpenseEvent): void {
  let entity = new RegisterExpense(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.payer = event.transaction.from;
  entity.participants = event.params.participants.map<Bytes>(
    participant => participant as Bytes
  );
  entity.amount = event.params.amount;
  entity.description = event.params.description;
  entity.save();
}

export function handleTransferBatch(event: TransferBatchEvent): void {
  let entity = new TransferBatch(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.operator = event.params.operator;
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.ids = event.params.ids;
  entity.values = event.params.values;
  entity.save();
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  let entity = new TransferSingle(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.operator = event.params.operator;
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.value = event.params.value;
  entity.save();
}

export function handleURI(event: URIEvent): void {
  let entity = new URI(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.value = event.params.value;
  entity.save();
}
