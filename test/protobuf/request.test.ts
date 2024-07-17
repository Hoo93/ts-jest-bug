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

  it('입력은 했으나 value 를 설정하지 않은 StringValue 값은 "" 를 가진다..', () => {
    const request = ModifyBusinessSimpleReq.create({
      businessIds: ['business1', 'business2'],
      bookingStatus: 1, // AVAILABLE
      bookingAvailableValue: 10,
      name: StringValue.create(),
      desc: StringValue.create({ value: 'Description of Test Business' }),
      isImp: BoolValue.create({ value: true }),
    });

    expect(request.name?.value).toBe('');
    expect(request.name?.value).toBe('');
  });

  describe('optional field bookingAvailableValue Test', () => {
    it('optional field를 입력하지 않은 경우 undefined 를 리턴한다.', () => {
      const request = ModifyBusinessSimpleReq.create({
        businessIds: ['business1', 'business2'],
        bookingStatus: 1, // AVAILABLE
        name: StringValue.create(),
        desc: StringValue.create({ value: 'Description of Test Business' }),
        isImp: BoolValue.create({ value: true }),
      });

      expect(request.bookingAvailableValue).toBeUndefined();
    });
  });
});
