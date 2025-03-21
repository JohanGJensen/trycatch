type Response<Success, Failed> = { data: Success | null; error: Failed | null; };

export const tryCatch = async <Data, Err = unknown>(asyncAction: Promise<Data>): Promise<Response<Data, Err>> => {
    try {
        const data = await asyncAction;
        return { data, error: null };
    } catch (error) {
        const err = error as Err;
        return { data: null, error: err };
    }
}