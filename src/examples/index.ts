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

    console.log('example-fetch success: ', data.title);
};

const examplePromise = async () => {
    const { data, error } = await tryCatch(Promise.reject("failed and rejected"));
    if (error != null) {
        console.error(error);
        return;
        // throw error;
    }

    console.log('example-promise success: ', data);
};

exampleFetch();
examplePromise();
