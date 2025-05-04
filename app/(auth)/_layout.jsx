import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

export default function AuthLayout () {
  return (
    <>
            <StatusBar value="auto" />
            <Stack
            screenOptions={{ headerShown: false , animation: "none"}} 
            />
    </>
  )
}

