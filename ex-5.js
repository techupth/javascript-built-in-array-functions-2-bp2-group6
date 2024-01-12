let crimeRecordNames = ["Theodora Milenko", "Tinashe Benigno", "Mahalia Priyanka", "Maisy Sudhir"];

function searchCrimeRecord(name) {

    const hasCrimeRecord = crimeRecordNames.includes(name);
    console.log(`${name} ${hasCrimeRecord ? "has a crime record !!!" : "has no crime record."}`);
  }