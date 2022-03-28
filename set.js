const animals = [{
    id:1,
    name:'pig'
}]

const addAnimal = (animal) => {
    const isFoundAnimal = animals.some(item => item.id === animal.id);
    if(isFoundAnimal){
        console.log('Animal is already!');
    }else{
        animals.push(animal)
    }
}

const showAnimals = () => {
    return animals.map(item => console.log(item));
}

const deleteAnimal = (id) => {
    return animals.filter(item => item.id !== id)
}
