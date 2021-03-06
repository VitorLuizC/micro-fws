import type Either from './Either.js';

/**
 * Check if the value is an `Either`.
 * @param {*} value - Value that will be checked.
 * @returns {Boolean}
 */
export default function isEither(
  value: unknown,
): value is Either<unknown, unknown> {
  return (value as any)?._kind === 'Left' || (value as any)?._kind === 'Right';
}
