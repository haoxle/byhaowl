# By Haowl

This project is my final project as part of my course with Nology. My project is a full stack project and the readme of my byHaowl-api will detail the installation process.
This project is created via react, java and a database(specifically mysql). 
The final project is a e-comerce wesite selling candles and ceramics. It also focuses on mental health and provides users with words of affirmation.
<img width="2978" alt="Screenshot 2022-12-09 at 10 20 55-min" src="https://user-images.githubusercontent.com/111334034/206688138-9967318b-dba0-4749-8ae8-7bdacc97bd08.png">
<img width="2982" alt="Screenshot 2022-12-09 at 10 21 05-min" src="https://user-images.githubusercontent.com/111334034/206688141-d7192734-b220-40d1-847c-63c674af539a.png">
<img width="2981" alt="Screenshot 2022-12-09 at 10 21 19-min" src="https://user-images.githubusercontent.com/111334034/206688145-ad1b57e6-23a6-4fef-b7b3-4768a4839123.png">
<img width="2990" alt="Screenshot 2022-12-09 at 10 21 30-min" src="https://user-images.githubusercontent.com/111334034/206688147-c2ebd883-6722-4742-8f5a-7e2b6c261e3c.png">
<img width="2992" alt="Screenshot 2022-12-09 at 10 22 19-min" src="https://user-images.githubusercontent.com/111334034/206688148-6362e215-54b8-4f6c-992a-4214dec37e21.png">


## Dependencies

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

