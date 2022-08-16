interface Status<T> {
  status: string;
  error: T | unknown;
}

export const manageStatus = ({ status, error }: Status<Object>) => {
  if (status === 'loading') {
    return <h2>Loading...</h2>;
  }
  if (status === 'error') {
    return <h2>{Object(error).message}</h2>;
  }
};
