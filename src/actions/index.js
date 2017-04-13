export const SELECT_SCHOOL = 'SELECT_SELECT';

export function selectSchool(school) {
  console.log('school: ', school.title);
  return {
    type: SELECT_SCHOOL,
    payload: school
  }
}
