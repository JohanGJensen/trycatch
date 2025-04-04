type Success<T> = { data: T, error: null };
type Failed<T> = { data: null, error: T }; 
type Response<S = null, F = unknown> = Success<S> | Failed<F>;

/**
 * A try-catch wrapper function that returns an object,
 * similarly structured as a Golang async action.
 * @param asyncAction
 * @returns {Response}
 */
export const tryCatch = async <Data, Err = unknown>(
  asyncAction: Promise<Data>
): Promise<Response<Data, Err>> => {
  try {
    const data = await asyncAction;
    return { data, error: null };
  } catch (error) {
    const err = error as Err;
    return { data: null, error: err };
  }
};
