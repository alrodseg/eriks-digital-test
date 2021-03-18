interface MappeableData {
  [name: string]: any;
}

export function mapObjectData<T extends MappeableData>(data: T[]) {
  const mappedData: MappeableData = {};

  const keys = Object.keys(data[0]);

  for(let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const rowData: any[] = [];

    for(let j = 0; j < data.length; j++) {
      rowData.push(data[j][key]);
    }

    mappedData[key] = rowData;
  }

  return mappedData;
}
