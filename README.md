# JavaScript Starter for a Code Kata

Starter project to be used while performing a TDD code kata in JavaScript.

## Usage

Clone this repo

Verify you have Nodejs installed...

```
node --version
```

If you don't have Nodejs installed I suggest using nvm (for mac or Linux users
only):

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash
```

To confirm installation of nvm has worked, open a new terminal and run:

```
nvm --version
nvm install node
```

Once you have confirmed you now have node installed navigate to the root of this
project (the directory that the package.json file exists in)

Run the npm install command to get the project dependencies:

```
npm install
```

## ESlint and Prettier formater

In this vesion of the starter project we have included ESLint and Prettier to
help catch issues earlier and format our code to an agreed standard
automatically.

Our '.eslintrc.json' file now makes use of the default eslint recommendation
configurations and the prettier confirgurations.

In order to define custom prettier rules go to the playgorund builder on
[prettier.io](https://prettier.io/playground/). Configure the settings you would
like and click on the 'Copy config JSON' button to copy the json to your
clipboard.

This can now be pasted into a newly created prettier config file '.prettierrc'
at the root of our project.

# VSCode ESlint and Prettier extensions

To make the most of ESLint and Prettier it is advised you install the
[ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
and
[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
VSCode extensions. These will work in tandem with your configuration files in
order to highlight issues and auto format stlyist changes.

You may need to update your VSCode settings first. Open your settings via the
cog icon at the bottm left of VSCode -> Settings (keyboard shortcut is Ctrl + ,
). I prefer to view these settings as JSON which can be done via the icon in the
top right of the settings page of a piece of paper and arrow.

Now add the following entry to enable the prettier formatter as default and
optionally have it automatically format your code in accordance to your rules on
file save:

```
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
```
