# Gerald - The Challenge

This challenge involves creating a lateral menu that provides access to the home screen. On the home screen, there is a tab bar with navigation to two other screens, demonstrating the use of stack, tab, and drawer navigation working together.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Navigation](#navigation)
- [Video](#video)

## Introduction

In this challenge, I've created a mobile application which include the following features:

- A lateral menu (drawer) for easy navigation.
- A home screen with a tab bar that allows users to switch between different sections of the app.
- Use of stack, tab, and drawer navigation to provide a seamless user experience.

## Getting Started

To get started with this project, follow these steps:

- Clone project from https://github.com/alanstib/DrawerChallenge
- Open terminal and move forward to DrawerChallenge folder
- npm install to install all dependencies
- cd iOS && pod install && cd .. (so you can install everything for iphone)

- IOS -----> npx react-native run-ios (preferably try on ios because it looks nicer)
- android -----> npx react-native run-android

## Project Structure

The project is structured as follows:

/src - Contains the source code for the app.  
    /components - Custom React components.  
    /config - Theme colors and styles used in the app.
    /navigation - Navigation-related code, including stack, tab, and drawer navigation.  
    /screens - Screens for the app, including the home screen and other sections.  

## Navigation

The app's navigation is a key aspect of this challenge. It demonstrates the following types of navigation:

Stack Navigation: Used for navigating within a particular section of the app like the contact screen.  
Tab Navigation: Allows users to switch between different sections, such as Screen1 and Screen2.  
Drawer Navigation: Provides access to the lateral menu for easy navigation to different parts of the app.
|--> For this item, I couldn't replicate the exact animation. I've tried to implement only react-reanimated to build it but it was taking too much time so I opted for @react-navigation/drawer. I've added a small animation though.