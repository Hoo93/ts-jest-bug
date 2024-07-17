import { BoolValue, StringValue } from '../../generated/google/protobuf/wrappers';
import { ModifyBusinessSimpleReq } from '../../generated/test';

describe('ModifyBusinessSimpleReq Test', () => {
  it('입력하지 않은 값은 undefined 이다.', () => {
    const request = ModifyBusinessSimpleReq.create({
      businessIds: ['business1', 'business2'],
      bookingStatus: 1, // AVAILABLE
      bookingAvailableValue: 10,
      // name is not provided
      desc: StringValue.create({ value: 'Description of Test Business' }),
      isImp: BoolValue.create({ value: true }),
    });

    // Check if name is undefined
    expect(request.name).toBeUndefined();
    // Check if accessing name?.value returns undefined
    expect(request.name?.value).toBeUndefined();
  });

  it('입력하지 않은 값을 value 를 사용하면 에러가 발생한다.', () => {
    const request = ModifyBusinessSimpleReq.create({
      businessIds: ['business1', 'business2'],
      bookingStatus: 1, // AVAILABLE
      bookingAvailableValue: 10,
      // name is not provided
      desc: StringValue.create({ value: 'Description of Test Business' }),
      isImp: BoolValue.create({ value: true }),
    });

    // When, Then
    expect(() => {
      // @ts-ignore
      expect(request.name.value).toBeUndefined();
    }).toThrow();
  });
});
