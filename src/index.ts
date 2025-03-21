type Response<Success, Failed> = { data: Success | null; error: Failed | null };

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
