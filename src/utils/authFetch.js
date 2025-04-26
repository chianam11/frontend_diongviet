// utils/authFetch.js

export async function fetchWithAuth(url, options = {}) {
    const res = await fetch(url, {
        ...options,
        credentials: "include", // RẤT QUAN TRỌNG để gửi cookie
    });

    if (res.status === 401 || res.status === 403) {
        // Token hết hạn, gọi /refresh
        const refreshRes = await fetch("/api/auth/refresh", {
            method: "POST",
            credentials: "include", // để gửi cookie refreshToken
        });

        if (refreshRes.ok) {
            // Gọi lại API ban đầu sau khi refresh thành công
            const retryRes = await fetch(url, {
                ...options,
                credentials: "include",
            });
            return retryRes.json();
        } else {
            throw new Error("Refresh token expired. Please login again.");
        }
    }

    return res.json();
}
