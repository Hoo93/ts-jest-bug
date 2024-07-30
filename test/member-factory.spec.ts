import { MemberFactory } from '../defineFactory';
import { defineFactorifyConfig } from '@julr/factorify';

describe('MemberFactory Test', () => {

  beforeAll(() => {
    const disconnect = defineFactorifyConfig({
      casing:{
        insert:'camel',
        return:'camel'
      },
      database: {
        // See https://knexjs.org/guide/#configuration-options
        // for more information about the possible options
        client: 'mysql',
        connection: {
          host: '127.0.0.1',
          port: 8922,
          user: 'root',
          password: 'test',
          database: 'eco_test',
        },
      },
    })
  })

  it('', async () => {
    // Given
    const user = await MemberFactory.create()

    // When
    // Then
  });

});