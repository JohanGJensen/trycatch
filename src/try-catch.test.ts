import { vi, describe, test, expect } from "vitest";
import { tryCatch } from "./try-catch";

const RESPONSE = {
  FAILURE: 'failure',
  SUCCESS: 'success'
} as const;
const { SUCCESS, FAILURE } = RESPONSE;

describe("try-catch", () => {
  test("should have successfully retrieved data from fetch", async () => {
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({ ok: true, json: () => Promise.resolve(SUCCESS)}),
    ));

    const { data, error } = await tryCatch(fetch('http://random-test-url.org').then(res => res.json()));

    expect(error).toBeNull();
    expect(data).toBe(SUCCESS);
  });

  test("should have error not be null from fetch", async () => {
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({ ok: false, json: () => Promise.reject(FAILURE)}),
    ));

    const { data, error } = await tryCatch(fetch('http://random-test-url.org').then(res => res.json()));

    expect(error).toBe(FAILURE);
    expect(data).toBeNull();
  });

  test("should have successfully resolved promise", async () => {
    const { data, error } = await tryCatch(Promise.resolve(Promise.resolve(SUCCESS)));

    expect(error).toBeNull();
    expect(data).toBe(SUCCESS);
  });

  test("should have error not be null from rejected promise", async () => {
    const { data, error } = await tryCatch(Promise.resolve(Promise.reject(FAILURE)));

    expect(error).toBe(FAILURE);
    expect(data).toBeNull();
  });
});
