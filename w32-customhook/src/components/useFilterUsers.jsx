
  export default function useFilterUsers(users, search) {
      return users.filter(user =>
        user.toLowerCase().includes(search.toLowerCase())
      );
    }
    