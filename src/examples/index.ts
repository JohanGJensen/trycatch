import { tryCatch } from '../index';

type Response = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

const exampleFetch = async () => {
    const { data, error } = await tryCatch<Response, Error>(fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => res.json()));
    if (error != null) {
        throw error;
    }

    console.log('successfull call: ', data.title);
};

exampleFetch();
