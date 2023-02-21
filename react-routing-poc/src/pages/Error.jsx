import React from 'react'
import MainNavigation from '../components/MainNavigation'

const ErrorPage = () => {
    return (
        <div>
            <MainNavigation />
            <main>
                <h1>An Error Occurred !!</h1>
                <p>Could Not Find this Page</p>
            </main>
        </div>
    )
}

export default ErrorPage
