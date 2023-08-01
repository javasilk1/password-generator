

# Password Generator

Password Generator is a simple React component that allows users to generate strong and random passwords with various options.

## Installation

To use the Password Generator component in your React project, you can install node_modules:
### `yarn install`

## Usage

````
```
import PasswordGenerator from 'password-generator-react';
```
````
Add the PasswordGenerator component to your React application:
````
```
import React from 'react';
import PasswordGenerator from 'password-generator-react';

function App() {
  return (
    <div>
      <h1>Password Generator</h1>
      <PasswordGenerator />
    </div>
  );
}

export default App;
```
````

## Props

The PasswordGenerator component accepts the following optional props:

- length (number): The length of the generated password. Default is 12.
- useUppercase (boolean): Whether to include uppercase letters. Default is true.
- useLowercase (boolean): Whether to include lowercase letters. Default is true.
- useNumbers (boolean): Whether to include numbers. Default is true.
- useSymbols (boolean): Whether to include symbols. Default is true.

Example usage with custom options:

npx create-react-app emoji-picker --template typescript

````
```
import React from 'react';
import PasswordGenerator from "./components/PasswordGenerator";

<PasswordGenerator
  length={16}
  useUppercase={true}
  useLowercase={true}
  useNumbers={true}
  useSymbols={false}
/>
export default App;
```
````
## Contributing
Contributions to the Password Generator project are welcome! If you find a bug, have an enhancement in mind, or want to contribute in any way, please feel free to open an issue or submit a pull request.
## License
This project is licensed under the MIT License - see the [LICENSE](# EventViewCli











