import Event from "./Event";

export default function Scripts() {
  return (
    <section className="section main__scripts">
      <h2 className="section__title section__title-header">
        Избранные сценарии
      </h2>

      <ul className="event-grid">
        <Event
          slim={true}
          icon="light2"
          iconLabel="Освещение"
          title="Выключить весь свет в доме и во дворе"
        />
        <Event
          slim={true}
          icon="schedule"
          iconLabel="Расписание"
          title="Я ухожу"
        />
        <Event
          slim={true}
          icon="light2"
          iconLabel="Освещение"
          title="Включить свет в коридоре"
        />
        <Event
          slim={true}
          icon="temp2"
          iconLabel="Температура"
          title="Набрать горячую ванну"
          subtitle="Начнётся в 18:00"
        />
        <Event
          slim={true}
          icon="temp2"
          iconLabel="Температура"
          title="Сделать пол тёплым во всей квартире"
        />
      </ul>
    </section>
  );
}
