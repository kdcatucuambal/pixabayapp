type Props = {
  message: string;
};

const Error = ({ message }: Props) => {
  return <div className="alert alert-danger text-center">{message}</div>;
};

export default Error;
