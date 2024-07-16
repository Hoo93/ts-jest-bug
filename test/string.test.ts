describe('String', () => {
  describe('include Test', () => {
    it('찾으려는 문자가 포함된 경우 True 를 리턴한다.', () => {
      // Given
      const target = 'abcdefg';
      const includedString = 'cde';

      // When
      const sut = target.includes(includedString);

      // Then
      expect(sut).toBe(true);
    });

    it('찾으려는 문자가 포함되지 않은 경우 false 를 리턴한다.', () => {
      // Given
      const target = 'abcdefg';
      const notIncludedString = 'abf';

      // When
      const sut = target.includes(notIncludedString);

      // Then
      expect(sut).toBe(false);
    });
  });
});
