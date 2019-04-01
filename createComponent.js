const fs = require('fs');

const camelize = str => str.split('-').map(s => `${s[0].toUpperCase()}${s.slice(1).toLowerCase()}`).join('');

const fn = (name, isClass = true) => {
  const path = `./src/components/${name}`;
  fs.mkdirSync(path);
  const camelizedName = camelize(name);
  const indexData = `import ${camelizedName} from './${name}';

export default ${camelizedName};
`;

  const classComponent = `export default class ${camelizedName} extends React.Component {
    render() {
      return (
        <div></div>
      );
    }
  }
`;
  const fnComponent = `const ${camelizedName} = () => (

);

export default ${camelizedName};
`;

  const jsData = `import React from 'react';
import './${name}.css';

${isClass ? classComponent : fnComponent}`;
  fs.writeFileSync(`${path}/${name}.js`, jsData);
  fs.writeFileSync(`${path}/${name}.css`, '');
  fs.writeFileSync(`${path}/index.js`, indexData);
};

fn('cart-table', false);
