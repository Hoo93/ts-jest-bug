// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "test.proto" (package "sample", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { BoolValue } from "./google/protobuf/wrappers";
import { StringValue } from "./google/protobuf/wrappers";
/**
 * Message definition
 *
 * @generated from protobuf message sample.ModifyBusinessSimpleReq
 */
export interface ModifyBusinessSimpleReq {
    /**
     * @generated from protobuf field: repeated string businessIds = 1;
     */
    businessIds: string[];
    /**
     * @generated from protobuf field: sample.BookingStatus bookingStatus = 2;
     */
    bookingStatus: BookingStatus;
    /**
     * @generated from protobuf field: optional int32 bookingAvailableValue = 3;
     */
    bookingAvailableValue?: number;
    /**
     * @generated from protobuf field: google.protobuf.StringValue name = 4;
     */
    name?: StringValue;
    /**
     * @generated from protobuf field: google.protobuf.StringValue desc = 5;
     */
    desc?: StringValue;
    /**
     * @generated from protobuf field: google.protobuf.BoolValue isImp = 6;
     */
    isImp?: BoolValue;
}
/**
 * Response message
 *
 * @generated from protobuf message sample.ModifyBusinessSimpleRes
 */
export interface ModifyBusinessSimpleRes {
    /**
     * @generated from protobuf field: google.protobuf.StringValue result = 1;
     */
    result?: StringValue;
    /**
     * @generated from protobuf field: google.protobuf.BoolValue success = 2;
     */
    success?: BoolValue;
}
/**
 * @generated from protobuf message sample.OptionalWrapperTest
 */
export interface OptionalWrapperTest {
    /**
     * @generated from protobuf field: google.protobuf.StringValue wrapperString = 1;
     */
    wrapperString?: StringValue;
    /**
     * @generated from protobuf field: optional string optionalString = 2;
     */
    optionalString?: string;
}
/**
 * Enum definition
 *
 * @generated from protobuf enum sample.BookingStatus
 */
export enum BookingStatus {
    /**
     * @generated from protobuf enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from protobuf enum value: AVAILABLE = 1;
     */
    AVAILABLE = 1,
    /**
     * @generated from protobuf enum value: UNAVAILABLE = 2;
     */
    UNAVAILABLE = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class ModifyBusinessSimpleReq$Type extends MessageType<ModifyBusinessSimpleReq> {
    constructor() {
        super("sample.ModifyBusinessSimpleReq", [
            { no: 1, name: "businessIds", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "bookingStatus", kind: "enum", T: () => ["sample.BookingStatus", BookingStatus] },
            { no: 3, name: "bookingAvailableValue", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "name", kind: "message", T: () => StringValue },
            { no: 5, name: "desc", kind: "message", T: () => StringValue },
            { no: 6, name: "isImp", kind: "message", T: () => BoolValue }
        ]);
    }
    create(value?: PartialMessage<ModifyBusinessSimpleReq>): ModifyBusinessSimpleReq {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.businessIds = [];
        message.bookingStatus = 0;
        if (value !== undefined)
            reflectionMergePartial<ModifyBusinessSimpleReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ModifyBusinessSimpleReq): ModifyBusinessSimpleReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string businessIds */ 1:
                    message.businessIds.push(reader.string());
                    break;
                case /* sample.BookingStatus bookingStatus */ 2:
                    message.bookingStatus = reader.int32();
                    break;
                case /* optional int32 bookingAvailableValue */ 3:
                    message.bookingAvailableValue = reader.int32();
                    break;
                case /* google.protobuf.StringValue name */ 4:
                    message.name = StringValue.internalBinaryRead(reader, reader.uint32(), options, message.name);
                    break;
                case /* google.protobuf.StringValue desc */ 5:
                    message.desc = StringValue.internalBinaryRead(reader, reader.uint32(), options, message.desc);
                    break;
                case /* google.protobuf.BoolValue isImp */ 6:
                    message.isImp = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.isImp);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ModifyBusinessSimpleReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated string businessIds = 1; */
        for (let i = 0; i < message.businessIds.length; i++)
            writer.tag(1, WireType.LengthDelimited).string(message.businessIds[i]);
        /* sample.BookingStatus bookingStatus = 2; */
        if (message.bookingStatus !== 0)
            writer.tag(2, WireType.Varint).int32(message.bookingStatus);
        /* optional int32 bookingAvailableValue = 3; */
        if (message.bookingAvailableValue !== undefined)
            writer.tag(3, WireType.Varint).int32(message.bookingAvailableValue);
        /* google.protobuf.StringValue name = 4; */
        if (message.name)
            StringValue.internalBinaryWrite(message.name, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.StringValue desc = 5; */
        if (message.desc)
            StringValue.internalBinaryWrite(message.desc, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.BoolValue isImp = 6; */
        if (message.isImp)
            BoolValue.internalBinaryWrite(message.isImp, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message sample.ModifyBusinessSimpleReq
 */
export const ModifyBusinessSimpleReq = new ModifyBusinessSimpleReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ModifyBusinessSimpleRes$Type extends MessageType<ModifyBusinessSimpleRes> {
    constructor() {
        super("sample.ModifyBusinessSimpleRes", [
            { no: 1, name: "result", kind: "message", T: () => StringValue },
            { no: 2, name: "success", kind: "message", T: () => BoolValue }
        ]);
    }
    create(value?: PartialMessage<ModifyBusinessSimpleRes>): ModifyBusinessSimpleRes {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<ModifyBusinessSimpleRes>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ModifyBusinessSimpleRes): ModifyBusinessSimpleRes {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.StringValue result */ 1:
                    message.result = StringValue.internalBinaryRead(reader, reader.uint32(), options, message.result);
                    break;
                case /* google.protobuf.BoolValue success */ 2:
                    message.success = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.success);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ModifyBusinessSimpleRes, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.StringValue result = 1; */
        if (message.result)
            StringValue.internalBinaryWrite(message.result, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.BoolValue success = 2; */
        if (message.success)
            BoolValue.internalBinaryWrite(message.success, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message sample.ModifyBusinessSimpleRes
 */
export const ModifyBusinessSimpleRes = new ModifyBusinessSimpleRes$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OptionalWrapperTest$Type extends MessageType<OptionalWrapperTest> {
    constructor() {
        super("sample.OptionalWrapperTest", [
            { no: 1, name: "wrapperString", kind: "message", T: () => StringValue },
            { no: 2, name: "optionalString", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<OptionalWrapperTest>): OptionalWrapperTest {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<OptionalWrapperTest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OptionalWrapperTest): OptionalWrapperTest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.StringValue wrapperString */ 1:
                    message.wrapperString = StringValue.internalBinaryRead(reader, reader.uint32(), options, message.wrapperString);
                    break;
                case /* optional string optionalString */ 2:
                    message.optionalString = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: OptionalWrapperTest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.StringValue wrapperString = 1; */
        if (message.wrapperString)
            StringValue.internalBinaryWrite(message.wrapperString, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* optional string optionalString = 2; */
        if (message.optionalString !== undefined)
            writer.tag(2, WireType.LengthDelimited).string(message.optionalString);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message sample.OptionalWrapperTest
 */
export const OptionalWrapperTest = new OptionalWrapperTest$Type();
/**
 * @generated ServiceType for protobuf service sample.BusinessService
 */
export const BusinessService = new ServiceType("sample.BusinessService", [
    { name: "ModifyBusiness", options: {}, I: ModifyBusinessSimpleReq, O: ModifyBusinessSimpleRes }
]);
