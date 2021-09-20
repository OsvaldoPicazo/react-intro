

function MyComponent () {
    const myName = 'Osvaldo';
    const myFavDrink = "Cappucino";

    return (
        <div>
            <p>Hello my name is {myName}</p>
            <p> My favorite drink is {myFavDrink}</p>
            <p>I can use full JS inside JSX: {(() => myName+' '+ myFavDrink)()}</p>
        </div>
        );
}

export default MyComponent;


