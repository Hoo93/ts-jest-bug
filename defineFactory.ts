import { defineFactory } from '@julr/factorify';

interface Member {
  createId:string
  username:string
  password:string
  name:string
  refreshToken:string
  id:string
  type:string
  loginType:string
  nickname:string
  mobileNumber:string
  email:string
  birthYear:string
  birthday:string
  isAutoLogin:boolean
}

export const MemberFactory = defineFactory<Member>('member', ({ faker, isStubbed }) => ({
  createId: faker.random.alpha(6),
  username: faker.random.alpha(6),
  password: faker.random.alpha(6),
  name: faker.random.alpha(6),
  refreshToken: faker.random.alpha(6),
  id: faker.random.alpha(6),
  type: faker.random.alpha(6),
  loginType: faker.random.alpha(6),
  nickname: faker.random.alpha(6),
  mobileNumber: faker.random.alpha(6),
  email: faker.random.alpha(6),
  birthYear: faker.random.alpha(6),
  birthday: faker.random.alpha(6),
  isAutoLogin: true,
}))
  .build()