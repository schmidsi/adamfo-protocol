// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class PoolCreated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PoolCreated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PoolCreated must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PoolCreated", id.toString(), this);
    }
  }

  static load(id: string): PoolCreated | null {
    return changetype<PoolCreated | null>(store.get("PoolCreated", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get childAddress(): Bytes {
    let value = this.get("childAddress");
    return value!.toBytes();
  }

  set childAddress(value: Bytes) {
    this.set("childAddress", Value.fromBytes(value));
  }

  get members(): Array<Bytes> {
    let value = this.get("members");
    return value!.toBytesArray();
  }

  set members(value: Array<Bytes>) {
    this.set("members", Value.fromBytesArray(value));
  }
}

export class RegisterExpense extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RegisterExpense entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type RegisterExpense must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("RegisterExpense", id.toString(), this);
    }
  }

  static load(id: string): RegisterExpense | null {
    return changetype<RegisterExpense | null>(store.get("RegisterExpense", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get payer(): Bytes {
    let value = this.get("payer");
    return value!.toBytes();
  }

  set payer(value: Bytes) {
    this.set("payer", Value.fromBytes(value));
  }

  get participants(): Array<Bytes> {
    let value = this.get("participants");
    return value!.toBytesArray();
  }

  set participants(value: Array<Bytes>) {
    this.set("participants", Value.fromBytesArray(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get description(): string {
    let value = this.get("description");
    return value!.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }
}

export class TransferBatch extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TransferBatch entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TransferBatch must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TransferBatch", id.toString(), this);
    }
  }

  static load(id: string): TransferBatch | null {
    return changetype<TransferBatch | null>(store.get("TransferBatch", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get operator(): Bytes {
    let value = this.get("operator");
    return value!.toBytes();
  }

  set operator(value: Bytes) {
    this.set("operator", Value.fromBytes(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value!.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get ids(): Array<BigInt> {
    let value = this.get("ids");
    return value!.toBigIntArray();
  }

  set ids(value: Array<BigInt>) {
    this.set("ids", Value.fromBigIntArray(value));
  }

  get values(): Array<BigInt> {
    let value = this.get("values");
    return value!.toBigIntArray();
  }

  set values(value: Array<BigInt>) {
    this.set("values", Value.fromBigIntArray(value));
  }
}

export class TransferSingle extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TransferSingle entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TransferSingle must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TransferSingle", id.toString(), this);
    }
  }

  static load(id: string): TransferSingle | null {
    return changetype<TransferSingle | null>(store.get("TransferSingle", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get operator(): Bytes {
    let value = this.get("operator");
    return value!.toBytes();
  }

  set operator(value: Bytes) {
    this.set("operator", Value.fromBytes(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value!.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class URI extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save URI entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type URI must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("URI", id.toString(), this);
    }
  }

  static load(id: string): URI | null {
    return changetype<URI | null>(store.get("URI", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get value(): string {
    let value = this.get("value");
    return value!.toString();
  }

  set value(value: string) {
    this.set("value", Value.fromString(value));
  }
}