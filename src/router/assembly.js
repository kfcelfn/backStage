import React from 'react'

import loadable from '@/utils/loadable.js'
// const Home = loadable( () => import('@/pages/home') );
const Login = loadable( () => import('@/pages/login') );
const Reg = loadable( () => import('@/pages/reg') );
const Demo = () => <div>demo</div>

export {
  Demo,
  Login,
  Reg,
}