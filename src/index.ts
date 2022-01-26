export function validate(tax: string): boolean {
  return /(?<!-)(?<!\.)(?!0+(?:\.0+)?%)(?:\d|[1-9]\d|100)(?:(?<!100)\.\d+)?%/.test(
    tax
  );
}
