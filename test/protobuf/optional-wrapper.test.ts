import { OptionalWrapperTest } from '../../generated/test';
import { StringValue } from '../../generated/google/protobuf/wrappers';

describe('Optional Wrapper Test', () => {
  describe('undefined, null test', () => {
    it('두 필드 모두 undefindable 하다.', () => {
      // Given
      const sut = OptionalWrapperTest.create();

      // Then
      expect(sut.wrapperString).toBeUndefined();
      expect(sut.optionalString).toBeUndefined();
    });

    it('두 필드 모두 null 을 넣은 경우 undefined 가 호출된다.', () => {
      // When
      const sut =
        // @ts-ignore
        OptionalWrapperTest.create({
          // @ts-ignore
          wrapperString: null,
          // @ts-ignore
          optionalString: null,
        });

      expect(sut.optionalString).toBeUndefined();
      expect(sut.wrapperString).toBeUndefined();
    });
  });

  describe('값이 있는 경우 테스트', () => {
    it('값을 넣어 데이터를 생성할 수 있다.', () => {
      // When
      const sut = OptionalWrapperTest.create({
        wrapperString: StringValue.create({ value: 'wrapper' }),
        optionalString: 'optional',
      });

      expect(sut.optionalString).toBeDefined();
      expect(sut.wrapperString).toBeDefined();
    });

    it('wrapper 의 타입은 object 이다.', () => {
      // When
      const sut = OptionalWrapperTest.create({
        wrapperString: StringValue.create({ value: 'wrapper' }),
        optionalString: 'optional',
      });

      expect(typeof sut.wrapperString).toBe('object');
    });

    it('wrapper 의 타입은 .value 를 통해 값에 접근 가능하다', () => {
      // When
      const sut = OptionalWrapperTest.create({
        wrapperString: StringValue.create({ value: 'wrapper' }),
        optionalString: 'optional',
      });

      expect(sut.wrapperString?.value).toBe('wrapper');
      expect(typeof sut.wrapperString?.value).toBe('string');
    });

    it('wrapper 의 타입 값이 없는 경우 ?.value 는 undefined 이다.', () => {
      // When
      const sut = OptionalWrapperTest.create({
        optionalString: 'optional',
      });

      expect(sut.wrapperString?.value).toBeUndefined();
    });
  });
});
