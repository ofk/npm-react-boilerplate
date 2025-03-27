export function Hello({ message = 'World' }: { message?: string }): React.ReactElement {
  return <div>Hello, {message}!</div>;
}
