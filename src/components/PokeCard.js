

const PokeCard = ({name}) => {
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    return(
        <div style={{backgroundColor : getRandomColor()}}>
            <p> The pokemon {name}</p>
        </div>
    )
}

export default PokeCard