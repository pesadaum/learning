from csv import DictReader
import matplotlib.pyplot as plt

time = []
v_out = []
v_cap_diff = []

plt_v_cap_diff = plt

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

plt_v_cap_diff.plot(time, v_out, label=r'$V_{cap}$')
plt_v_cap_diff.plot(time, v_cap_diff, ":", label=r'$V_{out}$')
plt_v_cap_diff.legend(loc='upper right')
plt_v_cap_diff.xlabel(r"tempo $[s]$", fontsize=12)
plt_v_cap_diff.ylabel(r"tensão $[V]$", fontsize=12)
plt_v_cap_diff.title(
    r"\textbf{Tensão diferencial no capacitor, tensão de saída $\times$ tempo}")
plt_v_cap_diff.show()
# plt.savefig('nome_figura.eps')
