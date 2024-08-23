describe('ts-jest error reporting', () => {
  it('2=2', () => {
    // Given
    // When
    const sut = 1+1

    // Then
    expect(sut).toBe(2)
  });
});