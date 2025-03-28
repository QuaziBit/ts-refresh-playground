import logging from '../components/loggs';
import buttonClick from '../components/buttonClick.js';

const demo_1 = (id: string) : void => {
  logging('demo_01 initialized.', 'info');
  
  const handler = () : void => {
    alert('Click me button works!');
  }
  
  buttonClick(id, handler);
}

export default demo_1;