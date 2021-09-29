from csv import DictReader
import matplotlib.pyplot as plt

time = []
v_out = []
v_cap_diff = []

# Certificar que a primeira linha é o header
with open('nmos_inicial.csv', 'r') as csv:
    data = DictReader(csv)
    for row in data:
        time.append(float(row['XVAL ']))
        v_out.append(float(row['V_out ']))
        v_cap_diff.append(float(row['V_cap_diff ']))

plt.rc('text', usetex=True)
plt.rc('font', family='serif')
plt.ticklabel_format(axis="x", style="sci", scilimits=(0, 0))

plt.plot(time, v_out)
plt.savefig('teste.eps')

plt.plot(time, v_cap_diff)
plt.savefig("v_cap_diff.eps")
