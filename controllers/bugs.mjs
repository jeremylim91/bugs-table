export default function bugs(db) {
  const index = ((req, res) => {
    res.render('home');
  });
  const create = (req, res) => {
    console.log(req.body);
    const { problemContent, errorTextContent, commitContent } = req.body;
    console.log('problemContent is:');
    console.log(problemContent);
    db.Bug.create({
      problem: problemContent,
      errorText: errorTextContent,
      commit: commitContent,
    })
      .then((newBug) => {
        console.log(newBug);
        res.send(newBug);
      });
  };
  return { index, create };
}
