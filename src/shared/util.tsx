interface StatusType {
  status: string;
}

type ErrorType<T> = {
  error: T | unknown;
};

export const manageStatus = (
  { status }: StatusType,
  { error }: ErrorType<object>
) => {
  if (status === 'loading') {
    return <h2>Loading...</h2>;
  }
  if (status === 'error') {
    return <h2>{Object(error).message}</h2>;
  }
};
