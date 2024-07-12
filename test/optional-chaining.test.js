describe('TS Optional Chaining Test', () => {
  it('존재하지 않는 속성은 undefined 를 리턴한다.', () => {
    // Given
    const args = {};

    // When
    // @ts-ignore
    const sut = args.where;

    // Then
    expect(sut).toBe(undefined);
  });

  it('존재하지 않는 속성의 하위 속성에 접근하는 경우 에러를 발생시킨다.', () => {
    // Given
    const args = {};

    // When, Then
    expect(() => {
      // @ts-ignore
      const sut = args.where.id;
    }).toThrow();
  });

  it('Optional Chaining 은 ? 앞의 속성의 존재를 확인한다.', () => {
    // Given
    const args = {};

    // When
    const sut = args.where?.id;

    // Then
    expect(sut).toBe(undefined);
  });
});
