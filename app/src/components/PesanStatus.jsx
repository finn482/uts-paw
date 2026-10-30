export default function PesanStatus({ loading = false, error = "" }) {
  if (loading) {
    return (
      <p className="status" role="status">
        Loading...
      </p>
    );
  }
  if (error) {
    return (
      <p className="status" role="alert">
        {error}
      </p>
    );
  }
  return null;
}
