const apiKey = process.env.GOOGLE_API_KEY ?? "insert-your-api-key";
export const fetchFonts = async () => {
  try {
    const res = await fetch(
      `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${apiKey}`
    );
    const result = await res.json();
    return result;
  } catch {
    throw new Error("Failed to fetch fonts");
  }
};
