import { isAfter } from 'date-fns';

describe('date-fns Test', () => {
  describe('isAfter Test', () => {
    it('isAfter(date_a, date_b) 의 형태로 비교한다.', () => {
      // Given
      const date_a = new Date(2000, 1, 1);
      const date_b = new Date(2024, 7, 22);

      // When
      const sut = isAfter(date_a, date_b);

      // Then
      expect(sut).toBe(false);
    });

    it('boolean 값을 리턴한다.', () => {
      // Given
      const date_a = new Date(2000, 1, 1);
      const date_b = new Date(2024, 7, 22);

      // When
      const sut = isAfter(date_a, date_b);

      // Then
      expect(sut).toBe(false);
    });

    it('앞의 날짜를 기준으로 isAfter를 판별한다.', () => {
      // Given
      const date_a = new Date(2000, 1, 1);
      const date_b = new Date(2024, 7, 22);

      // When
      const sut = isAfter(date_a, date_b);

      // Then
      // 2000 년은 2024년 보다 후가 아니므로 false return
      expect(sut).toBe(false);
    });
  });
});
