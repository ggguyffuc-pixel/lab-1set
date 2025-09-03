// دوال الحساب (اللوجيك)
export function splitAmount(num) {
  const values = [200, 100, 50, 20, 10, 5, 1];
  const result = [];
  let remaining = num;

  for (const v of values) {
    if (remaining >= v) {
      const count = Math.floor(remaining / v);
      result.push({ count, value: v });
      remaining %= v;
    }
  }
  return result;
}
