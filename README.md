# react-native-custom-tabs
A custom top tabs component which allows navigating between different screens. It has been developed in such a way that it can be used similar to stack and drawer navigator provided by default [React Navigation](https://reactnavigation.org/docs/stack-navigator/#:~:text=import%20it%20from-,%40react%2Dnavigation/stack%3A,-import%20%7B%20createStackNavigator).

For each SingleTab added as Children of CustomTab, a tab and its respective screen is added. The tab title and component to be rendered as screen for that tab are specified as props in SingleTab. The tabs and screen shifting is animated. The forward and backward arrow buttons to shift tabs are only displayed when the number of tabs is greater than 2.
