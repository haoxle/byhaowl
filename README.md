# By Haowl

This project is my final project as part of my course with Nology. My project is a full stack project and the readme of my byHaowl-api will detail the installation process.
This project is created via react, java and a database(specifically mysql). 
The final project is a e-comerce wesite selling candles and ceramics. It also focuses on mental health and provides users with words of affirmation.
<img width="2981" alt="Screenshot 2022-12-09 at 10 21 19" src="https://user-images.githubusercontent.com/111334034/206683850-e73c39a6-ff9c-4de7-94fb-1623f5ca07bf.png">

## Dependencoes

In the project directory, you can run:

### `npm install`

Ensure that in apiUtils, the local host is coherent with java.

### `npm run start`

## Motivation
This project was inspired by my candle business. I wanted to have a more real life application to my final project and thought as I make candles, it would make sense to create a website for it. This is an ongoing project and will constantly be updated post course.


## Built With
- React
- Javascript
- SASS
- Java
- Database (mySQL)


### Features
I implemented useContext, a new concept I had to learn during the project to implement my shopping basket. I wanted to use redux package but due to the time constraints this was not possible


```export const Context = (props) => {
  const reducer = (state, action) => {
    const flattened = state.flat(1);

    const increase = flattened.map((item) => {
      if (item.stock === item.quantity) {
        return item;
      }
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else return item;
    });
    const remove = flattened.filter((item) => item.id !== action.payload.id);
    const decrease = flattened.map((item) => {
      if (item.quantity === 0) {
        return item;
      }
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity - 1 };
      } else return item;
    });

    switch (action.type) {
      case "ADD":
        const checkCandle = state.some(
          (varArr) => varArr[0].id === action.payload[0].id
        );
        if (checkCandle) {
          return state;
        } else return [...state, action.payload];
      case "INCREASE":
        return [increase];
      case "DECREASE":
        return [decrease];
      case "REMOVE":
        return remove;
      default:
        return flattened;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };
  return (
    <Cartcontext.Provider value={info}> {props.children}</Cartcontext.Provider>
  );
};
 ``` 

## Credits
-N/A

