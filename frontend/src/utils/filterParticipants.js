export const filterParticipants = (participants, filter) => {
  const normalizedFullname = filter.fullname.toLowerCase();
  const normalizedEmail = filter.email.toLowerCase();

  return participants
    .filter(
      ({ fullname, email }) =>
        fullname.toLowerCase().includes(normalizedFullname) &&
        email.toLowerCase().includes(normalizedEmail)
    )
    .sort((a, b) => a.fullname.localeCompare(b.fullname));
};
