import React from 'react'
import Loadable from 'react-loadable'
import { LoadingPage } from '../components/utils'

export const LandingPage = Loadable({
    loader: () => import('../pages/landing/Landing'),
    loading () {
        return <LoadingPage />
    }
})

export const RegisterPage = Loadable({
    loader: () => import('../pages/register/Register'),
    loading () {
        return <LoadingPage />
    }
})
