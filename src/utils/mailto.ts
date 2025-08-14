export const createMailtoLink = (email: string, subject?: string, body?: string): string => {
    const encodedSubject = subject ? encodeURIComponent(subject) : "";
    const encodedBody = body ? encodeURIComponent(body) : "";
    const params: string[] = [];
    if (encodedSubject) params.push(`subject=${encodedSubject}`);
    if (encodedBody) params.push(`body=${encodedBody}`);
    const query = params.length ? `?${params.join("&")}` : "";
    return `mailto:${email}${query}`;
};


