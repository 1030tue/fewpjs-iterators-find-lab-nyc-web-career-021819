

superbowlWin = (record) => {
  let winner = record.find( record => record.result === "W" )
  return winner ? winner.year : undefined
}
